package com.elliott.ham.pokeBuilderBE.Controller;

import com.elliott.ham.pokeBuilderBE.Model.Team;
import com.elliott.ham.pokeBuilderBE.Model.User;
import com.elliott.ham.pokeBuilderBE.Repository.UserRepository;
import com.elliott.ham.pokeBuilderBE.Service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {

    private final UserRepository repository;

    public UserController(UserRepository repository) {
        this.repository = repository;
    }

    @PostMapping("")
    public User createUser(@RequestBody User newUser) {
        return this.repository.save(newUser);
    }

    @PostMapping("/login")
    public boolean login(@RequestBody User user) {
        if (this.repository.findByUsername(user.getUsername()) != null) {
            if (this.repository.findByUsername(user.getUsername()).getPassword().equals(user.getPassword())){
                return true;
            }
            else return false;
        }
        else return false;
    }


}
