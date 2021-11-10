package com.elliott.ham.pokeBuilderBE.Controller;

import com.elliott.ham.pokeBuilderBE.Model.Team;
import com.elliott.ham.pokeBuilderBE.Repository.TeamsRepository;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/teams")
public class TeamsController {

    private final TeamsRepository repository;

    public TeamsController(TeamsRepository repository){
        this.repository = repository;
    }

    @PostMapping("")
    public Team createTeam(@RequestBody Team team){
        return this.repository.save(team);
    }

    @GetMapping("")
    public Iterable<Team> getTeams(){
        return this.repository.findAll();
    }

}
