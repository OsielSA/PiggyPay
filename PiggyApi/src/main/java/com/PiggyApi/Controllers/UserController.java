package com.PiggyApi.Controllers;

import com.PiggyApi.Models.User;
import com.PiggyApi.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/api/v1/users")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService = userService; //new UserService();
    }
    @GetMapping
    public List<User> getUsers(){
        return this.userService.getUsers();
    }
}
