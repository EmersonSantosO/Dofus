# Generated by Django 4.2.3 on 2023-07-16 00:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("guias", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="masmorras",
            name="link",
            field=models.URLField(blank=True, max_length=100, null=True),
        ),
    ]
