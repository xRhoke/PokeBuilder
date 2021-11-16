package com.elliott.ham.pokeBuilderBE.Controller;

import com.elliott.ham.pokeBuilderBE.Model.PokemonDTO;
import com.elliott.ham.pokeBuilderBE.Model.Team;
import com.elliott.ham.pokeBuilderBE.Service.PokemonService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin
@RequestMapping("/pokemon")
public class PokemonController {

    private final PokemonService pokemonService;

    public PokemonController(PokemonService pokemonService){
        this.pokemonService = pokemonService;
    }

    @GetMapping("")
    public ArrayList<PokemonDTO> getAllPokemon(@RequestParam int start, @RequestParam int count){
        return this.pokemonService.getAllPokemon(start, count);
    }

    @GetMapping("/{id}/moves")
    public ArrayList<Object> getPokemonMoves(@PathVariable int id){
        return this.pokemonService.getPokemonMoves(id);
    }

    @GetMapping("/{id}/abilities")
    public ArrayList<Object> getPokemonAbilities(@PathVariable int id){
        return this.pokemonService.getPokemonAbilities(id);
    }

    @GetMapping("/{id}/stats")
    public ArrayList<Object> getPokemonStats(@PathVariable int id){
        return this.pokemonService.getPokemonStats(id);
    }

}
