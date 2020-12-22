# Generated by Django 3.1.3 on 2020-12-19 12:52

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('memories', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='memory',
            name='feature_image',
            field=models.ImageField(default=None, upload_to=None),
        ),
        migrations.AddField(
            model_name='memory',
            name='user',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_query_name='user_memory', to='accounts.myuser'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='memory',
            name='id',
            field=models.CharField(default='kSjtPCorl4cso5NFIVl0Xw', editable=False, max_length=16, primary_key=True, serialize=False, unique=True),
        ),
    ]
