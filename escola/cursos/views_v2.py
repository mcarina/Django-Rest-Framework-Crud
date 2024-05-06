from rest_framework import viewsets, mixins, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Curso, Avaliacao
from .serializers import CursoSerializer, AvaliacaoSerializer
from .permisssions import *

class CursoViewSet(viewsets.ModelViewSet):
    queryset = Curso.objects.all()
    serializer_class = CursoSerializer

    # permission_classes = (permissions.DjangoModelPermissions)
    permission_classes = (SuperUsuario, permissions.DjangoModelPermissions)

    @action(detail = True, methods = ['GET'])
    def avaliacoes(self, request, pk = None):
        curso = self.get_object()
        serializer = AvaliacaoSerializer(curso.avaliacoes.all(), many=True)
        return Response(serializer.data)

''' VIEW SET PADRÃO, METODO LIST NAO PERMITIDO LOCALHOST:8000/API/V2/AVALIACOES

class AvaliacaoViewSet(viewsets.ModelViewSet):
    queryset = Avaliacao.objects.all()
    serializer_class = AvaliacaoSerializer

'''   
# VIEW SET CUSTOMIZADO, METODO LIST NAO PERMITIDO LOCALHOST:8000/API/V2/AVALIACOES/ID
class AvaliacaoViewSet(mixins.ListModelMixin,
                       mixins.CreateModelMixin, #metodo POST
                       mixins.RetrieveModelMixin, #metodo GET
                       mixins.UpdateModelMixin, #metodo PUT ou PATCH
                       mixins.DestroyModelMixin, #metodo DELETE
                       viewsets.GenericViewSet #Não adiciona métodos diretamente, mas fornece uma estrutura para usar os mixins.
                       ):
    queryset = Avaliacao.objects.all()
    serializer_class = AvaliacaoSerializer 