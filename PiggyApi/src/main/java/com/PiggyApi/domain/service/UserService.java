package com.PiggyApi.domain.service;

import com.PiggyApi.domain.repository.UserRepository;
import com.PiggyApi.persistence.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> getAll(){
        return userRepository.getAll();
    }

    public Optional<User> getUserById(int idUser){
        return userRepository.getByIdUser(idUser);
    }

    public User saveUser(User user){
        return userRepository.saveUser(user);
    }

    public boolean deleteUser(int idUser){
        return getUserById(idUser).map(user -> {
            userRepository.deleteUser(idUser);
            return true;
        }).orElse(false);
    }
}
