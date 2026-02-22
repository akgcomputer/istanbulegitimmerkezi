// src/lib/instructors.ts

// Tüm kurs verilerini import et
import { courses as bilisimCourses } from '../data/courses-bilisim';
import { courses as dilCourses } from '../data/courses-dil';
import { courses as ilkogretimCourses } from '../data/courses-ilkogretim';
import { courses as liseCourses } from '../data/courses-lise';
import { courses as sporCourses } from '../data/courses-spor';
import { courses as sanatCourses } from '../data/courses-sanat';
import { courses as genelCourses } from '../data/courses-genel';

// Tüm kursları tek dizide birleştir
const tumKurslar = [
  ...bilisimCourses,
  ...dilCourses,
  ...ilkogretimCourses,
  ...liseCourses,
  ...sporCourses,
  ...sanatCourses,
  ...genelCourses
];

// Tüm eğitmenleri benzersiz şekilde topla ve kurslarıyla eşleştir
export function getAllInstructors() {
  const tumEgitmenler: any[] = [];
  const gorulenSluglar = new Set<string>();

  tumKurslar.forEach(kurs => {
    if (kurs.instructors && Array.isArray(kurs.instructors)) {
      kurs.instructors.forEach((egitmen: any) => {
        if (!gorulenSluglar.has(egitmen.slug)) {
          gorulenSluglar.add(egitmen.slug);
          
          // Bu eğitmenin verdiği tüm kursları bul
          const verdigiKurslar = tumKurslar
            .filter(k => 
              k.instructors?.some((i: any) => i.slug === egitmen.slug)
            )
            .map(k => ({
              slug: k.slug,
              title: k.title,
              category: k.category,
              breadcrumb: k.breadcrumb,
              image: k.image,
              instructorInfo: k.instructors?.find((i: any) => i.slug === egitmen.slug)
            }));
          
          tumEgitmenler.push({
            ...egitmen,
            verdigiKurslar
          });
        }
      });
    }
  });

  return tumEgitmenler;
}

// Slug'a göre tek eğitmen bul
export function getInstructorBySlug(slug: string) {
  const egitmenler = getAllInstructors();
  return egitmenler.find(e => e.slug === slug);
}