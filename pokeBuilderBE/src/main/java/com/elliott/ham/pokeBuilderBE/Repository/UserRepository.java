package com.elliott.ham.pokeBuilderBE.Repository;

import com.elliott.ham.pokeBuilderBE.Model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
    public User findByUsername(String username);
}
