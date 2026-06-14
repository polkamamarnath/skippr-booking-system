package com.skippr.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class BookingSummary {

    private long total;
    private long pending;
    private long assigned;
    private long completed;
}