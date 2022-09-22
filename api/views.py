from .models import Items
from django.shortcuts import render
from .serializers import ItemsSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class listItems(APIView):
    # permission_classes = (IsAuthenticated, )

    def get(self, request):
        # user = request.user
        # tasks = user.tasks_set.all()
        items = Items.objects.all()
        serializer = ItemsSerializer(items, many=True)
        return Response(serializer.data)