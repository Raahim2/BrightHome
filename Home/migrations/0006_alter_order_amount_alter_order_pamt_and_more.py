# Generated by Django 4.2.7 on 2024-01-21 17:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Home', '0005_order_amount_order_pamt_order_pname'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='amount',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='order',
            name='pamt',
            field=models.CharField(max_length=1000),
        ),
        migrations.AlterField(
            model_name='order',
            name='pname',
            field=models.CharField(max_length=1000),
        ),
    ]