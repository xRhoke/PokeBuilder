package com.elliott.ham.pokeBuilderBE.Service;

import com.elliott.ham.pokeBuilderBE.Model.PokemonDTO;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.HashMap;

@Service
public class PokemonService {

    private final RestTemplate restTemplate = new RestTemplate();

    public ArrayList<PokemonDTO> getAllPokemon(int start, int count) {
        if (start < 1 || start > 898) start = 1;
        if (count < 1 || start + count > 899) count = 1;

        ArrayList<PokemonDTO> pokemonDTOList = new ArrayList<>();

        for (int i = start; i < start + count; i++) {
        PokemonDTO pokemonDTO = this.restTemplate.getForObject(
                String.format("https://pokeapi.co/api/v2/pokemon/%s", i),
                PokemonDTO.class
        );

        pokemonDTO.setImage(String.format("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/%s.png", pokemonDTO.getId()));
        pokemonDTO.setSmallImage(String.format("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/%s.png", pokemonDTO.getId()));
        pokemonDTOList.add(pokemonDTO);
        }

        return pokemonDTOList;

    }

    public ArrayList<Object> getPokemonAbilities(int id) {
        HashMap<String, Object> response = this.restTemplate.getForObject(
                String.format(String.format("https://pokeapi.co/api/v2/pokemon/%s", id)),
                HashMap.class
        );

        ArrayList<Object> abilities = (ArrayList<Object>) response.get("abilities");

        return abilities;
    }

    public ArrayList<Object> getPokemonMoves(int id) {
        HashMap<String, Object> response = this.restTemplate.getForObject(
                String.format(String.format("https://pokeapi.co/api/v2/pokemon/%s", id)),
                HashMap.class
        );

        ArrayList<Object> moves = (ArrayList<Object>) response.get("moves");

        return moves;
    }

    public ArrayList<Object> getPokemonStats(int id) {
        HashMap<String, Object> response = this.restTemplate.getForObject(
                String.format(String.format("https://pokeapi.co/api/v2/pokemon/%s", id)),
                HashMap.class
        );

        ArrayList<Object> stats = (ArrayList<Object>) response.get("stats");

        return stats;
    }

}
