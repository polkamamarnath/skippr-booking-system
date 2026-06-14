package com.skippr.backend.controller;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skippr.backend.dto.BookingSummary;
import com.skippr.backend.entity.Booking;
import com.skippr.backend.service.BookingService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin("*")
public class BookingController {

    private final BookingService bookingService;

    public BookingController(
            BookingService bookingService) {

        this.bookingService = bookingService;
    }

    @PostMapping
    public Booking createBooking(
            @Valid @RequestBody Booking booking) {

        return bookingService.saveBooking(booking);
    }

    @GetMapping
    public List<Booking> getAllBookings() {

        return bookingService.getAllBookings();
    }


@PutMapping("/{id}/status")
public Booking updateStatus(
        @PathVariable Long id,
        @RequestBody Map<String, String> body) {

    String status = body.get("status");
    return bookingService.updateStatus(id, status);
}

    @GetMapping("/summary")
    public BookingSummary getSummary() {

        return bookingService.getSummary();
    }
    @DeleteMapping("/{id}")
public void deleteBooking(@PathVariable Long id) {
    bookingService.deleteBooking(id);
}
}