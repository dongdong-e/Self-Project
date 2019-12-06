from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):

    """User Custom Model"""

    bio = models.TextField(default="")
