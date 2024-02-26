package com.PiggyApi.domain.repository;

import com.PiggyApi.persistence.crud.DebitMovementCrudRepository;
import com.PiggyApi.persistence.entity.DebitMovement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class DebitMovementRepository {
    @Autowired
    private DebitMovementCrudRepository debitMovementCrudRepository;

    public List<DebitMovement> getAllByIdAccount(int idAccount){
        return debitMovementCrudRepository.findByIdAccount(idAccount);
    }

    public DebitMovement saveMovement(DebitMovement debitMovement){
        return debitMovementCrudRepository.save(debitMovement);
    }
    public void deleteMovement(int idMovement){
        debitMovementCrudRepository.deleteById(idMovement);
    }
}
