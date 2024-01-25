package com.PiggyApi.persistence.crud;

import com.PiggyApi.persistence.entity.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface UserCrudRepository extends CrudRepository<User, Integer> {

    @Query(value = "SELECT * FROM Users WHERE id_user = ?", nativeQuery = true)
    Optional<User> findByIdIdUser(int idUser);
}
