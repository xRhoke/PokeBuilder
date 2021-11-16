package com.elliott.ham.pokeBuilderBE.Controller;

import com.elliott.ham.pokeBuilderBE.Model.Team;
import com.elliott.ham.pokeBuilderBE.Model.User;
import com.elliott.ham.pokeBuilderBE.Repository.TeamsRepository;
import com.elliott.ham.pokeBuilderBE.Service.UserService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/teams")
public class TeamsController {

    private final TeamsRepository repository;
    private final UserService userService;

    public TeamsController(TeamsRepository repository, UserService userService){
        this.repository = repository;
        this.userService = userService;
    }

    @PostMapping("")
    public Team createTeam(@RequestBody Team team){
        return this.repository.save(team);
    }

    @GetMapping("")
    public Iterable<Team> getTeams(){
        return this.repository.findAll();
    }

    @DeleteMapping("/{id}")
    public String deleteTeam(@PathVariable Long id){
        this.repository.deleteById(id);
        return "Team with id: " + id + " deleted.";
    }

    @GetMapping("/{username}")
    public Iterable<Team> getUserTeams(@PathVariable String username) {
        return this.userService.getUserTeams(username);
    }

    @PostMapping("/{username}")
    public String createUserTeam(@PathVariable String username, @RequestBody Team team){
        return this.userService.createUserTeam(username, team);
    }

}
