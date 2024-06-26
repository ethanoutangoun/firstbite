# Generated by Django 5.0.3 on 2024-03-27 06:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('equipment', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='equipment',
            name='imageUrl',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='equipment',
            name='price',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True),
        ),
        migrations.AddField(
            model_name='equipment',
            name='serialNumber',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='equipment',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
    ]
