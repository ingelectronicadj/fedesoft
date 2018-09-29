Conversión variable número a entero
```ruby
10.4444.to_i
``` 

String
```ruby
name = "Carlos"
"Hola " + name
"Hola #{ name.upcase }"		


- Conversión string a entero
- Conversion string a flotante
```ruby
"22".to_i
"22".to_f
```

### Operadores Logicos
- '&& OR itrue ifalse'

(10 > 5) && (15 > 5)
(10 > 5) || (15 > 5)

# variables

name = "Carlos"
edad = 23
puts name

# strings
# encoding: utf-8

puts "Hola Colombia"
puts "22".to_i
puts "22".to_f





#IO => Input / Output

print "Digita tu nombre:"

#Obtiene data ingresada usuario, asigna a la variable nombre
nombre = gets

puts "Hola #{nombre} tiene #{nombre.length} letras"





# Operadores aritmeticos
puts 3 - 2
puts 3 + 2
puts 3 * 2
puts 3 / 2




# condicionales 


if pais == "colombia"
  puts "Ganó"
else
  puts "Perdió"
end



numero_uno = gets.chomp.to_i
numero_dos = gets.chomp.to_i
edad = gets.chomp.to_i

if numero_uno > numero_dos && numero_dos < numero_uno
  puts "#{numero_uno} es mayor que #{numero_dos}"
elsif numero_uno == numero_dos
  puts "Ambos números son iguales"
else
  puts "#{numero_dos} es mayor que #{numero_uno}"
end

puts "#{numero_uno} es mayor que #{numero_dos}" if numero_uno > numero_dos





# Case 

print 'Dame tu calificación de 1 a 10: '
calification = gets.chomp.to_i

puts case calification
when 11,10
   "Muy Bien"
when 9
   "Muy Bien 9"
when 8
   "Muy Bien 8"
when 7
   "Muy Bien 7"
when 6
   "Muy Bien 6"
else
   'u.u'
end




# Arreglos

arreglo = ['Php', 'Ruby', 'Laravel', true]

puts arreglo

puts "---"

puts arreglo[3]



# Add element in the array
arreglo << 'Ruby On Rails'

puts arreglo




# Ciclo Each

califications = [10, 7, 8, 9, 10, 11, 6]

sum = 0

califications.each do |calification|
  puts "Now the calification is #{calification}"
end




# Rangos

(1..20).each do |number|
  puts number
end

puts '----------------------'

# Imprime en dos en dos
(1..20).step(2).each do |number|
  puts number
end




# Método con un argumento
def hello1(nombre)  
  puts 'Hola ' + nombre  
  return 'correcto'  
end  
puts(hello1('Pedro')) 
