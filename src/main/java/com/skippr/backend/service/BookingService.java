package com.skippr.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.skippr.backend.entity.Booking;
import com.skippr.backend.repository.BookingRepository;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;

    public BookingService(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    public Booking saveBooking(Booking booking) {
        booking.setStatus("Pending");
        return bookingRepository.save(booking);
    }

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }
}