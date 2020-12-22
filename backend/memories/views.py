from django.shortcuts import render
from .models import Memory
from rest_framework.generics import DestroyAPIView, UpdateAPIView, CreateAPIView,  ListAPIView, GenericAPIView, ListCreateAPIView, RetrieveAPIView
from rest_framework import mixins
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from .serializers import MemorySerializer, CreateMemorySerializer


# todo correct permissions

class DeleteMemory(DestroyAPIView):
    serializer_class = CreateMemorySerializer
    queryset = Memory.objects.all()

class DetailMemory(RetrieveAPIView):
    serializer_class = MemorySerializer
    queryset = Memory.objects.all()

class EditMemory(UpdateAPIView):
    permission_classes = [AllowAny]
    serializer_class = MemorySerializer
    queryset = Memory.objects.all()

class CreateMemory(ListCreateAPIView):
    serializer_class = CreateMemorySerializer

    def get_queryset(self):

        queryset = Memory.objects.all()

        # filter for user - memories
        userid = self.request.query_params.get("userid", None)
        if userid is not None:
            queryset = queryset.filter(user=userid)

        

        # filter for date-range
        # date_from, date_to

        # order by handling
        # oldest, newest, 

        # add permisssions ? 

        return queryset
    

    def get(self, request, *args, **kwargs):    
        return self.list(request, *args, **kwargs)



    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def perform_create(self,serializer):
        serializer.save(user=self.request.user)