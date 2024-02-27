package com.PiggyApi.domain.service;

import com.PiggyApi.domain.repository.DebitMovementRepository;
import com.PiggyApi.persistence.entity.DebitMovement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class DebitMovementService {
    @Autowired
    public DebitMovementRepository debitMovementRepository;
    @Autowired
    public DebitAccountService debitAccountService;

    public List<DebitMovement> getAllMovementsByIdAccount(int idAccount){
        List<DebitMovement> movements = debitMovementRepository.getAllByIdAccount(idAccount);
        movements = movements.stream()
                .sorted(Comparator.comparing(DebitMovement::getDateMovement).reversed())
                .collect(Collectors.toList());

        return movements;
    }

    public DebitMovement saveMovement(DebitMovement debitMovement){
        DebitMovement savedMovement = debitMovementRepository.saveMovement(debitMovement);
        debitAccountService.updateCurrentBalance(savedMovement);
        return savedMovement;
    }

}
