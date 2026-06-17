<template>
  <div>
    <h2>Formulaire TP - Chapitre 13</h2>

    <label>Texte :</label>
    <input type="text" v-model="formData.texte" />
    <br />

    <label>Mot de passe :</label>
    <input type="password" v-model="formData.motDePasse" />
    <br />

    <label>Nombre :</label>
    <input type="number" v-model="formData.nombre" />
    <br />

    <label>Date :</label>
    <input type="date" v-model="formData.date" />
    <br />

    <label>Heure :</label>
    <input type="time" v-model="formData.heure" />
    <br />

    <label>Date et heure :</label>
    <input type="datetime-local" v-model="formData.dateHeure" />
    <br />

    <label>Couleur :</label>
    <input type="color" v-model="formData.couleur" />
    <br />

    <label>Plage :</label>
    <input type="range" v-model="formData.plage" min="0" max="100" />
    <span>{{ formData.plage }}</span>
    <br />

    <label>Recherche :</label>
    <input type="search" v-model="formData.recherche" />
    <br />

    <label>Message :</label>
    <textarea v-model="formData.message"></textarea>
    <br />

    <label>Fruit (radio) :</label>
    <input type="radio" v-model="formData.fruit" value="pomme" /> Pomme
    <input type="radio" v-model="formData.fruit" value="orange" /> Orange
    <br />

    <label>Compétences (checkbox) :</label>
    <input type="checkbox" v-model="formData.competences" value="Vue" /> Vue.js
    <input type="checkbox" v-model="formData.competences" value="C#" /> C#
    <br />

    <label>Ville (liste) :</label>
    <select v-model="formData.ville">
      <option value="Toamasina">Fianara</option>
      <option value="Antananarivo">Tanà</option>
    </select>
    <br />

    <hr />
    <h3>Valeurs saisies :</h3>
    <p>Texte : {{ formData.texte }}</p>
    <p>Nombre : {{ formData.nombre }}</p>
    <p>Date : {{ formData.date }}</p>
    <p>Heure : {{ formData.heure }}</p>
    <p>Date et heure : {{ formData.dateHeure }}</p>
    <p>Couleur : {{ formData.couleur }}</p>
    <p>Plage : {{ formData.plage }}</p>
    <p>Recherche : {{ formData.recherche }}</p>
    <p>Message : {{ formData.message }}</p>
    <p>Fruit sélectionné : {{ formData.fruit }}</p>
    <p>Compétences : {{ formData.competences.join(', ') }}</p>
    <p>Ville sélectionnée : {{ formData.ville }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        texte: '',
        motDePasse: '',
        nombre: 0,
        date: '',
        heure: '',
        dateHeure: '',
        couleur: '#000000',
        plage: 50,
        recherche: '',
        message: '',
        fruit: '',
        competences: [],
        ville: '',
      },
    }
  },
}
</script>
