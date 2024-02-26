package com.PiggyApi.domain.service;

import com.PiggyApi.domain.repository.DebitMovementRepository;
import com.PiggyApi.persistence.entity.DebitMovement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DebitMovementService {
    @Autowired
    public DebitMovementRepository debitMovementRepository;
    @Autowired
    public DebitAccountService debitAccountService;

    public List<DebitMovement> getAllMovementsByIdAccount(int idAccount){
        return debitMovementRepository.getAllByIdAccount(idAccount);
    }

    public DebitMovement saveMovement(DebitMovement debitMovement){
        DebitMovement savedMovement = debitMovementRepository.saveMovement(debitMovement);
        debitAccountService.updateCurrentBalance(savedMovement);
        return savedMovement;
    }

}
