from django.db import models
from secrets import token_urlsafe

from django.contrib.auth import get_user_model


VIEWING_PERMISSION_CHOICES = (
    ('PU', 'public'),
    ('TO', 'tagged only'),
    ('FO', 'friends only'),
    ('PR', 'private')
)

User = get_user_model()

def getRandomId():
    return token_urlsafe(16)

class Memory(models.Model):
    id = models.CharField(max_length=16, unique=True, primary_key=True, default=getRandomId, editable=False)

    title = models.CharField(max_length=128)
    content = models.TextField(null=True, blank=True)
    feature_image = models.ImageField(null=True, blank=True, upload_to=None)
    viewing_permissions = models.CharField(max_length=2, choices=VIEWING_PERMISSION_CHOICES, default="PR")


    date = models.DateField()

    create_date = models.DateTimeField(auto_now_add=True)
    last_update_date = models.DateTimeField(auto_now=True)

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_query_name="user_memory")