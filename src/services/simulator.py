import tkinter as tk
import numpy as np

root = tk.Tk()
root.geometry("500x500")

#### Remarques ####

# Quand pas d'infos dans la base de données, retourne None

# Reste à faire :
# Conserver oui/non la saisie et créer bdd saisies --> sauvergarde possible, il faut maintenant
# mettre en forme le résultat pour qu'on puisse le retraiter par la suite ! Affichage graphique  tonne de chque
# matériau en fonction de ....? (même graphiqe, différents points (pour les matériaux) d'une même couleur (pour
# représenter une même saisie) Chercher estimation nombre de voitures produites en 2030 (pas seulement électriques,
# toutes les voitures confondues) ainsi que énergie stockée moyenne dans voiture électriques --> toujours pour la
# partie calcul de l'objectif A developper, pas mettre un par un dans chaque case M[...] associé à chaque élément ?


# Questions pour la réunion:
# moyenne énergie stockée voitures électriques qui permet calcul de l'objectif = capacité saisie dans la simulation ?
# sauvegarde par techno ou par éléments ?


#### Constantes ####

N_voitures = 10  # nombre total de voitures produites en 2030
M_energie = 8  # moyenne de l'énergie stockée dans une voiture électrique - capacité de la ZOE = 52 kWh
CO2_diesel = 150  # g/km pour une voiture moyenne en ville
Circ_Terre = 40075  # circonférence de la Terre en km

#### Material database ####

with open("../assets/material_database.csv", "r") as fichier:
    material_database = fichier.readlines()
    for i in range(0, len(material_database)):
        material_database[i] = material_database[i].split(";")


def databaseTOlist(a):
    liste = []
    for i in range(1, len(material_database)):
        if material_database[i][a] == "-":
            liste.append(None)
        else:
            liste.append(float(material_database[i][a]))
    return liste


list_molar_mass = databaseTOlist(2)

list_world_production = databaseTOlist(3)

list_CO2_footprint = databaseTOlist(6)

list_energy_footprint = databaseTOlist(8)

list_water_usage = databaseTOlist(10)

list_world_reserves = databaseTOlist(4)


#### Calculation ####

# T est une liste qui renvoie le nom de la batterie saisie, sa densité d'énergie, sa masse totale pour répondre à
# l'objectif, et le détail de la masse de chacun des éléments la composant
def interm_calc(M):
    T = [0 for i in range(4)]
    T[3] = [0 for i in range(93)]
    T[0] = M[0]
    T[1] = M[94] * M[95]  # energy density = capacity*potential
    T[2] = M[93] * 10 ** 9 / T[1]  # total mass
    S = 0
    for i in range(0, 92):
        if list_molar_mass[i] != None:
            S += M[i + 1] * list_molar_mass[i]
    for i in range(0, 92):
        if list_molar_mass[i] != None:
            T[3][i] = (M[i + 1] * list_molar_mass[i]) * T[2] / S
        else:
            T[3][i] = None
    return T


# liste élements de la technologie (num�ro atomique), quantité pour répondre à objectif, % de la production annuelle
# que ça représente, empreinte carbone, empreinte énergétique, consommation eau (pour l'année) NB : si on a pas les
# données, le code renvoit 0 et ne fait pas la distinction par rapport à la situation où il n'y a pas de l'élément
# dans la batterie
def element_indications(M):
    E = []
    T = interm_calc(M)
    for i in range(0, 92):
        w = list_world_production[i]
        x = list_CO2_footprint[i]
        y = list_energy_footprint[i]
        z = list_water_usage[i]
        if T[3][i] != None and w != None and x != None and y != None and z != None:
            E.append(
                [i + 1, T[3][i], T[3][i] * 100 / list_world_production[i], list_CO2_footprint[i] * T[3][i] * 10 ** 3,
                 list_energy_footprint[i] * T[3][i] * 10 ** 3, list_water_usage[i] * T[3][i] * 10 ** 3])
        else:
            E.append([i + 1, 0, 0, 0, 0, 0])
    return E


#### Graphiques ####

# Code graphique 1 - pour chaque élément, le pourcentage de la production mondiales que représente notre batterie
# pour répondre à l'objectif sur 1 an
def perc_production(M):
    P = [0 for i in range(92)]
    T = interm_calc(M)
    for i in range(0, 92):
        if T[3][i] != None and list_world_production[i] != None:
            P[i] = T[3][i] * 100 / list_world_production[i]
        else:
            P[i] = 0
    return P


# Code graphique 2 - part de chaque élément dans l'empreinte CO2 totale de batterie pour répondre à l'objectif en
# pourcentage
def part_empreinte_CO2(M):
    X = [0 for i in range(92)]
    E = element_indications(M)
    S = sum(E[i][3] for i in range(92))
    for i in range(0, 92):
        X[i] = 100 * E[i][3] / S
    return X


# Code graphique 3 - l'empreinte carbone que représente notre batterie répondant à l'objectif sur 1 an en terme de km
# d'une voiture diesel parcouru
def equ_empreinte_CO2(M):
    E = element_indications(M)
    S = sum(E[i][3] for i in range(92))
    return (S / CO2_diesel, S / (CO2_diesel * Circ_Terre))


# Code graphique 4 - pour chaque élément, le pourcentage des réserves/ressources ???? mondiales que représente notre
# batterie pour répondre à l'objectif sur 1 an
def perc_reserves(M):
    Z = [0 for i in range(92)]
    T = interm_calc(M)
    for i in range(0, 92):
        if T[3][i] != None and list_world_reserves[i] != None:
            Z[i] = T[3][i] * 100 / list_world_reserves[i]
        else:
            Z[i] = 0
    return Z


#### Window ####

def getTextInput():
    # global lithium, oxygen, fluorine, aluminium, phosphorus, sulfur, titanium, vanadium, manganese, iron, cobalt,
    # nickel
    global name, aluminium, cobalt, nickel, perc_electric_cars_produced, capacity, potential
    name = textName.get()
    nickel = textNickel.get()
    cobalt = textCobalt.get()
    aluminium = textAluminium.get()
    perc_electric_cars_produced = textPercentageECP.get()
    capacity = textCapacity.get()
    potential = textPotential.get()
    M = [0 for i in range(96)]
    M[0] = name
    M[13] = float(aluminium)
    M[27] = float(cobalt)
    M[28] = float(nickel)
    M[93] = float(perc_electric_cars_produced) * N_voitures * M_energie  # permet le calcul de l'objectif !
    M[94] = float(capacity)
    M[95] = float(potential)
    # print(interm_calc(M))
    # print(element_indications(M))
    # print(epuisement(M))
    # print(part_empreinte_CO2(M))
    # print(equ_empreinte_CO2(M))
    print(perc_reserves(M))


#### Inputs ####

## Name
label = tk.Label(root, text="Name", bg="green")
label.pack()

textEntry = tk.StringVar()
textEntry.set("")
textName = tk.Entry(root,
                    textvariable=textEntry)
textName.pack()

## Elements

# Nickel
label = tk.Label(root, text="Nickel", bg="orange")
label.pack(padx=0, pady=(10, 1))

textEntry = tk.StringVar()
textEntry.set("0")
textNickel = tk.Entry(root,
                      textvariable=textEntry)
textNickel.pack()

# Cobalt
label = tk.Label(root, text="Cobalt", bg="orange")
label.pack(padx=0, pady=(10, 1))

textEntry = tk.StringVar()
textEntry.set("0")
textCobalt = tk.Entry(root,
                      textvariable=textEntry)
textCobalt.pack()

# Aluminium
label = tk.Label(root, text="Aluminium", bg="orange")
label.pack(padx=0, pady=(10, 1))

textEntry = tk.StringVar()
textEntry.set("0")
textAluminium = tk.Entry(root,
                         textvariable=textEntry)
textAluminium.pack()

## Objectif
label = tk.Label(root, text="Percentage of electric cars produced in 2030", bg="yellow")
label.pack(padx=0, pady=(10, 1))

textEntry = tk.StringVar()
textEntry.set("0")
textPercentageECP = tk.Entry(root,
                             textvariable=textEntry)
textPercentageECP.pack()

## Capacity
label = tk.Label(root, text="Capacity in mAh/g", bg="yellow")
label.pack(padx=0, pady=(10, 1))

textEntry = tk.StringVar()
textEntry.set("0")
textCapacity = tk.Entry(root,
                        textvariable=textEntry)
textCapacity.pack()

## Potential
label = tk.Label(root, text="Potential in V", bg="yellow")
label.pack(padx=0, pady=(10, 1))

textEntry = tk.StringVar()
textEntry.set("0")
textPotential = tk.Entry(root,
                         textvariable=textEntry)
textPotential.pack()

#### Read ####

btnRead = tk.Button(root, height=1, width=10, text="Read",
                    command=getTextInput)
btnRead.pack(padx=0, pady=(10, 1))


#### Save ####

def saveInput():
    global name, aluminium, cobalt, nickel, perc_electric_cars_produced, capacity, potential
    name = textName.get()
    nickel = textNickel.get()
    cobalt = textCobalt.get()
    aluminium = textAluminium.get()
    perc_electric_cars_produced = textPercentageECP.get()
    capacity = textCapacity.get()
    potential = textPotential.get()
    M = [0 for i in range(96)]
    M[0] = name
    M[13] = float(aluminium)
    M[27] = float(cobalt)
    M[28] = float(nickel)
    M[93] = float(perc_electric_cars_produced) * N_voitures * M_energie  # permet le calcul de l'objectif !
    M[94] = float(capacity)
    M[95] = float(potential)
    infos = element_indications(M)

    try:
        open("../assets/batteries.txt", "r")
        exist = True
    except:
        exist = False

    if exist:
        with open("../assets/batteries.txt", "a") as fich:
            fich.write(str(infos))

    else:
        with open("../assets/batteries.txt", "w") as fich:
            fich.write(str(infos))

    np.save('infos.npy', infos)


btnSave = tk.Button(root, height=1, width=10, text="Save",
                    command=saveInput)
btnSave.pack(padx=0, pady=(10, 1))

root.mainloop()
