from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
from .models import BankStatement


class FileUploadView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        file = request.FILES.get("file")
        if file and file.name.endswith(".csv"):
            bank_statement = BankStatement.objects.create(file=file)
            return Response(
                {"message": "File uploaded successfully!", "id": bank_statement.id},
                status=status.HTTP_201_CREATED,
            )
        return Response(
            {"error": "Invalid file type. Only .csv files are allowed."},
            status=status.HTTP_400_BAD_REQUEST,
        )
