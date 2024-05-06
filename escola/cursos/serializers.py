from rest_framework import serializers
from .models import Curso, Avaliacao

class AvaliacaoSerializer(serializers.ModelSerializer):
    class Meta:
        extra_kwargs = {
            'email' : {'write_only' : True}
        }
        model = Avaliacao
        fields = [ 
            'id',
            'curso',
            'name',
            'email',
            'comentario',
            'avaliacao',
            'criacao',
            'ativo'
        ]

class CursoSerializer(serializers.ModelSerializer):

    #1. Nested Relationship: não recomendado para grande demanda de dados
    avaliacoes = AvaliacaoSerializer(many = True, read_only= True)

    #2. HyperLinked Related Field: usado de fato para rest api, fornce seu respectivos end points por id
    # avaliacoes = serializers.HyperlinkedRelatedField(many = True, read_only = True, view_name= 'avaliaco-detail')

    #3. Primary Key Related field: ideal para caso de numero extremo de registros
    # avaliacoes = serializers.PrimaryKeyRelatedField(many = True, read_only= True)
    
    class Meta:
        model = Curso
        fields = [
            'id',
            'titulo',
            'url',
            'criacao',
            'ativo',
            'avaliacoes'
        ]