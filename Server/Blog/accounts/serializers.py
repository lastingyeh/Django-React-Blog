from django.contrib.auth import get_user_model
from rest_framework.serializers import (
    CharField, ModelSerializer, SerializerMethodField, ValidationError)

from rest_framework_jwt.settings import api_settings

User = get_user_model()


class UserCreateSerializer(ModelSerializer):
    '''
    A read-only field that get its representation from calling a method on the
    parent serializer class. The method called will be of the form
    "get_{field_name}"
    '''
    token = SerializerMethodField()

    class Meta:
        model = User
        fields = [
            'email',
            'username',
            'password',
            'token'
        ]
        extra_kwargs = {'password': {'write_only': True}}

    def get_token(self, object):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(object)
        token = jwt_encode_handler(payload)

        return token

    def create(self, vaildated_data):
        user = User.objects.create(
            email=vaildated_data['email'],
            username=vaildated_data['username'],
        )

        user.set_password(vaildated_data['password'])
        user.save()

        return user


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['username']
