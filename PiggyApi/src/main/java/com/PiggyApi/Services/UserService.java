package com.PiggyApi.Services;

import com.PiggyApi.Models.User;
import com.PiggyApi.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final  UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }
    public List<User> getUsers(){
        return userRepository.findAll();
    }


//    public List<User> getUsers(){
//        return List.of(
//                new User(
//                        0,
//                        "testuser",
//                        "test name",
//                        "test lastname",
//                        0,
//                        null
//                )
//        );
//    }
}
