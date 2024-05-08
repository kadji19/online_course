import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

// Création du contexte d'authentification
const AuthContext = createContext();

// Fonction pour récupérer le contexte d'authentification
export const useAuth = () => {
  return useContext(AuthContext);
};

// Composant fournisseur du contexte d'authentification
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Fonction de connexion
  const login = async (email, mdp) => {
    try {
      // Envoyer les informations d'identification au serveur pour vérification
      const response = await axios.post('http://localhost:5000/auth/login', { email, mdp });
      
      // Vérifier si l'authentification a réussi
      const { data } = response;
      if (data && data.accessToken) {
        // Stocker le jeton JWT dans le localStorage
        localStorage.setItem('token', data.accessToken);
        // Mettre à jour l'état isLoggedIn à true
        setIsLoggedIn(true);
      } else {
        // Gérer les erreurs d'authentification
        throw new Error('Token non reçu');
      }
    } catch (error) {
      console.error('Erreur lors de la connexion : ', error);
      // Gérer les erreurs d'authentification (par exemple, afficher un message d'erreur à l'utilisateur)
      setIsLoggedIn(false);
      throw error;
    }
  };

  // Fonction de déconnexion
  const logout = () => {
    // Supprimer le jeton JWT du localStorage
    localStorage.removeItem('token');
    // Mettre à jour l'état isLoggedIn à false
    setIsLoggedIn(false);
  };

  // Valeur fournie par le contexte
  const authContextValue = {
    isLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
