from django.contrib.auth import get_user_model
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny

# Serializers
from .serializers import (
    UserCreateSerializer, UserSerializer
)

# rest_auth
from rest_auth.registration.views import SocialLoginView

# Facebook auth
from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter

# Get User Model
User = get_user_model()


class UserCreateView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserCreateSerializer
    permission_classes = [AllowAny]

# after create call this.
def jwt_response_payload_handler(token, user=None, request=None):
    return {
        'token': token,
        'user': UserSerializer(user, context={'request': request}).data
    }


class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter
