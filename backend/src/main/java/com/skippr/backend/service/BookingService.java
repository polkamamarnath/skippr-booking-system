package com.skippr.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.skippr.backend.dto.BookingSummary;
import com.skippr.backend.entity.Booking;
import com.skippr.backend.exception.BookingNotFoundException;
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

    public Booking updateStatus(Long id, String status) {

        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new BookingNotFoundException(id));

        booking.setStatus(status);

        return bookingRepository.save(booking);
    }

    public BookingSummary getSummary() {

        long total = bookingRepository.count();

        long pending =
                bookingRepository.countByStatus("Pending");

        long assigned =
                bookingRepository.countByStatus("Assigned");

        long completed =
                bookingRepository.countByStatus("Completed");

        return new BookingSummary(
                total,
                pending,
                assigned,
                completed
        );
    }
    public void deleteBooking(Long id) {
    bookingRepository.deleteById(id);
}
}