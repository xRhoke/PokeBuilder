package com.elliott.ham.pokeBuilderBE.Model;

import javax.persistence.*;

@Entity
@Table(name = "teams")
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private int poke1id;

    @Column
    private int poke2id;

    @Column
    private int poke3id;

    @Column
    private int poke4id;

    @Column
    private int poke5id;

    @Column
    private int poke6id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getPoke1id() {
        return poke1id;
    }

    public void setPoke1id(int poke1id) {
        this.poke1id = poke1id;
    }

    public int getPoke2id() {
        return poke2id;
    }

    public void setPoke2id(int poke2id) {
        this.poke2id = poke2id;
    }

    public int getPoke3id() {
        return poke3id;
    }

    public void setPoke3id(int poke3id) {
        this.poke3id = poke3id;
    }

    public int getPoke4id() {
        return poke4id;
    }

    public void setPoke4id(int poke4id) {
        this.poke4id = poke4id;
    }

    public int getPoke5id() {
        return poke5id;
    }

    public void setPoke5id(int poke5id) {
        this.poke5id = poke5id;
    }

    public int getPoke6id() {
        return poke6id;
    }

    public void setPoke6id(int poke6id) {
        this.poke6id = poke6id;
    }
}
