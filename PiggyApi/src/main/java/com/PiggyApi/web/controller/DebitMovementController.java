package com.PiggyApi.web.controller;

import com.PiggyApi.domain.service.DebitMovementService;
import com.PiggyApi.persistence.entity.DebitMovement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/debit_account/movement")
public class DebitMovementController {
    @Autowired
    private DebitMovementService debitMovementService;

    @GetMapping("/{id}")
    public ResponseEntity<List<DebitMovement>> getMovementsByIdAccount(@PathVariable("id") int idAccount){
        return new ResponseEntity<>(debitMovementService.getAllMovementsByIdAccount(idAccount), HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<DebitMovement> saveMovement(@RequestBody DebitMovement debitMovement){
        return new ResponseEntity<>(debitMovementService.saveMovement(debitMovement), HttpStatus.CREATED);
    }
}
