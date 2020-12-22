from django.urls import path, re_path


from .views import DeleteMemory, CreateMemory, DetailMemory,EditMemory


urlpatterns = [
    #path('', DeleteMemory.as_view(), name="test"), search
    path('<str:pk>/delete', DeleteMemory.as_view(), name="test"),
    path('<str:pk>/edit', EditMemory.as_view(), name="test"),
    path('<str:pk>/', DetailMemory.as_view(), name="detail_memory"),
    path('', CreateMemory.as_view(), name="create_memory"),
    #path('<uuid:userid>/', CreateMemory.as_view(), name="create_memory2"),
    #path('<str:id>/edit', DeleteMemory.as_view(), name="test"),
    #path('refresh_token/', refresh_jwt_token, name="refresh"),
    #path('login/', ObtainJSONWebToken.as_view(serializer_class=UserLoginSerializer), name="login"),
]