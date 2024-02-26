package com.PiggyApi.persistence.crud;

import com.PiggyApi.persistence.entity.DebitMovement;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface DebitMovementCrudRepository extends CrudRepository<DebitMovement, Integer> {
    List<DebitMovement> findByIdAccount(int idAccount);

}
