package com.PiggyApi.domain.repository;

import com.PiggyApi.persistence.crud.UserCrudRepository;
import com.PiggyApi.persistence.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class UserRepository  {

     @Autowired
     private UserCrudRepository userCrudRepository;

     public List<User> getAll(){
          return (List<User>) userCrudRepository.findAll();
     }

     public Optional<User> getByIdUser(int idUsuario){
          return userCrudRepository.findById(idUsuario);
     }

     public User saveUser(User user){
          return userCrudRepository.save(user);
     }

     public void deleteUser(int idUser){
          userCrudRepository.deleteById(idUser);
     }
}
