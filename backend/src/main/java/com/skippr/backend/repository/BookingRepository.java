package com.skippr.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skippr.backend.entity.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {

    long countByStatus(String status);
}