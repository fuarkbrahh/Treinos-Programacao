nome_da_variavel = "Treino"
print(type(nome_da_variavel))


nome_da_variavel = 5
print(type(nome_da_variavel))

# constante python

NOME_DA_CONSTANTE = 10
print(NOME_DA_CONSTANTE)
NOME_DA_CONSTANTE = "Treinaweb"
print(NOME_DA_CONSTANTE)

# Você pode alterar o nome da constante em python, mas não de deve alterar
# o valor da constante pelo fato de que se está dem MAIÚSCULO o programador criador do código
# quis criar uma constante e não quer que o valor seja alterado.

# Python é case sensitive

#              OPERADORES LÓGICOS

# not usado para negar
print(not (10 > 10))

# operador "or" retorna true se uma das condições forem verdadeiras, ou false
# se as duas forem falsas .

print((10 == 10) or (10 > 20))

# operador "and" só retorna true se todas as operações forem verdadeiras

print((10 == 10) and (10 > 5))


#                   ESTRUTURAS CONDICIONAIS

idade = 67
if idade < 18:
    print("Você é criança")
elif idade >= 18 and idade <= 60:
    print("Você é adulto")
else:
    print("Você está na melhor idade")


#                   ESTRUTURAS DE REPETIÇÃO

for i in range(0, 10):
    print(i)
else:
    print("A lista foi percorrida com sucesso")

teste = 0
while teste <= 10:
    print("código sendo executado")
    teste += 1
else:
    print("O while finalizou")
