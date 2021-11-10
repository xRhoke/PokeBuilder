package com.elliott.ham.pokeBuilderBE.Repository;

import com.elliott.ham.pokeBuilderBE.Model.Team;
import org.springframework.data.repository.CrudRepository;

public interface TeamsRepository extends CrudRepository<Team, Long> {
}
