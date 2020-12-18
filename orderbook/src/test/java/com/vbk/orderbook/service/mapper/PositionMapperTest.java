package com.vbk.orderbook.service.mapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;

public class PositionMapperTest {

    private PositionMapper positionMapper;

    @BeforeEach
    public void setUp() {
        positionMapper = new PositionMapperImpl();
    }

    @Test
    public void testEntityFromId() {
        Long id = 1L;
        assertThat(positionMapper.fromId(id).getId()).isEqualTo(id);
        assertThat(positionMapper.fromId(null)).isNull();
    }
}
