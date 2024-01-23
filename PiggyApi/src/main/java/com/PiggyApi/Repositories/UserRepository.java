package com.PiggyApi.Repositories;

import com.PiggyApi.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository  extends JpaRepository<User, Integer> {


    @Query("SELECT * FROM User WHERE name = ?1")
    Optional<User> findProductByName(String name);
}
