package com.elliott.ham.pokeBuilderBE.Service;

import com.elliott.ham.pokeBuilderBE.Model.Team;
import com.elliott.ham.pokeBuilderBE.Model.User;
import com.elliott.ham.pokeBuilderBE.Repository.TeamsRepository;
import com.elliott.ham.pokeBuilderBE.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private final UserRepository userRepository;

    @Autowired
    private final TeamsRepository teamsRepository;

    public UserService(UserRepository userRepository, TeamsRepository teamsRepository){
        this.userRepository = userRepository;
        this.teamsRepository = teamsRepository;
    }

    public Iterable<Team> getUserTeams(String username){
        return this.userRepository.findByUsername(username).getTeams();
    }

    public String createUserTeam(String username, Team newTeam) {
        Team team = this.teamsRepository.save(newTeam);

        User user = this.userRepository.findByUsername(username);
        user.getTeams().add(team);
        this.userRepository.save(user);

        return String.format("%s created team with name: %s", username, team.getName());

    }

}
