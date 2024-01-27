# Generated by Django 4.2.7 on 2024-01-21 06:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Home', '0002_product_cateogry'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.CharField(max_length=15)),
                ('address', models.CharField(max_length=1000)),
            ],
        ),
    ]