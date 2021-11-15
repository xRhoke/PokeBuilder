package com.elliott.ham.pokeBuilderBE.Model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;

public class PokemonDTO {

    @JsonProperty("id")
    private int id;

    @JsonProperty("name")
    private String name;

    @JsonProperty("types")
    private ArrayList<Object> types;

    @JsonProperty("height")
    private int height;

    @JsonProperty("weight")
    private int weight;

    private String image;

    private String smallImage;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ArrayList<Object> getTypes() {
        return types;
    }

    public void setTypes(ArrayList<Object> types) {
        this.types = types;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getSmallImage() {
        return smallImage;
    }

    public void setSmallImage(String smallImage) {
        this.smallImage = smallImage;
    }
}
