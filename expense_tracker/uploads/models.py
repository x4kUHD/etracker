from django.db import models


# Create your models here.
class BankStatement(models.Model):
    file = models.FileField(upload_to="uploads/")
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"BankStatement {self.id} - {self.file.name}"
