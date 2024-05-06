from django.urls import path
from rest_framework.routers import SimpleRouter
from .views_v1 import *
from .views_v2 import *

router = SimpleRouter()
router.register('cursos', CursoViewSet)
router.register('avaliacoes', AvaliacaoViewSet)

urlpatterns = [
    path('cursos/', CursoAPIView.as_view(), name='cursos'),
    path('cursos/<int:pk>', CursoAPIViews.as_view(), name='cursos'),
    path('cursos/<int:curso_pk>/avaliacoes', AvaliacaoAPIViews.as_view(), name='cursos_avaliacoes'),
    path('cursos/<int:curso_pk>/avaliacoes/<int:avaliacao_pk>', AvaliacaoAPIView.as_view(), name='cursos_avaliacao'),
    path('avaliacoes/', AvaliacaoAPIView.as_view(), name='avaliacoes'),
    path('avaliacoes/<int:pk>', AvaliacaoAPIViews.as_view(), name='avaliacoes'),
]