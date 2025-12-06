from django.conf import settings
from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
import requests
from .serializers import RegisterSerializer, UserSerializer, EmailTokenObtainPairSerializer
from dotenv import load_dotenv
import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

# Load .env file
load_dotenv(os.path.join(BASE_DIR, ".env"))



User = get_user_model()

N8N_WEBHOOK_URL = os.getenv("N8N_WEBHOOK_URL", "")


def trigger_n8n_webhook(user: User):
    url = N8N_WEBHOOK_URL
    if not url:
        return  # silently skip if not configured

    payload = {
        "id": user.id,
        "email": user.email,
        "username": user.username,
    }

    try:
        requests.post(url, json=payload, timeout=5)
    except requests.RequestException:
        # Don't break signup if n8n fails
        pass


class RegisterView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            trigger_n8n_webhook(user)
            return Response(
                {"message": "User registered successfully."},
                status=status.HTTP_201_CREATED,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EmailTokenObtainPairView(TokenObtainPairView):
    serializer_class = EmailTokenObtainPairSerializer


class MeView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
