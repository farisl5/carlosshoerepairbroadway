import test from 'node:test';
import assert from 'node:assert/strict';
import { business } from '../src/business.js';

test('phone and directions lead to the supplied business', () => {
  assert.equal(business.phoneHref, 'tel:+12127990559');
  assert.equal(business.mapsUrl, 'https://maps.app.goo.gl/FL2XHo7ZFL5CFS1q6');
  assert.equal(business.address, '2214 Broadway');
  assert.equal(business.city, 'New York, NY 10024');
});

test('service cards have unique numbers and usable content', () => {
  assert.equal(new Set(business.services.map(s => s.number)).size, business.services.length);
  for (const service of business.services) {
    assert.ok(service.title.length > 0);
    assert.ok(service.description.length > 0);
    assert.ok(['shoe', 'spark', 'bag'].includes(service.icon));
  }
});
